<?php

define("JOKESFILE", "jokes-store.txt");

require('cors.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    echo json_encode(['data' => readJokesFromFile()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'));
    // var_dump($data);
    if ($data->title !== '' && $data->content !== '') {
        writeJokeToFile($data->title, $data->content);
    } else {
        returnError();
    }
}

function writeJokeToFile($title, $content) {
    $fp = fopen(JOKESFILE, 'a');
    fwrite($fp, sprintf("%s, %s, %s\n", $title, $content, mt_rand()));
    fclose($fp);
}

function returnError() {
    header("HTTP/1.0 400 Bad Request");
    echo json_encode([
        'message' => 'Both title and content are required.'
    ]);
}

function readJokesFromFile() {
    $response = [];
    $fp = fopen(JOKESFILE, "r");
    while (!feof($fp)) {
        list($title, $content, $id) = explode(",", fgets($fp));
        if ($title && $content && $id)
            array_push($response, 
                ['id' => str_replace("\n", "", $id), 'title' => $title, 'content' => $content]
            );
    }
    return $response;
    fclose($fp);
}