<?php

function jsonError($arr, $error)
{
    $arr["error_status"] = true;
    $arr["error_detail"] = $error;
    return json_encode($arr, JSON_UNESCAPED_UNICODE);
}

function jsonSuccess($arr)
{
    return json_encode($arr, JSON_UNESCAPED_UNICODE);
}

function testInput($data, $mysqli)
{
    $data = trim($data);
    $data = $mysqli->real_escape_string($data);
    return $data;
}

function testInputArr($arr, $mysqli)
{
    foreach ($arr as $key => $data) {
        if (gettype($data) === "array") {
            $arr[$key] = testInputArr($data, $mysqli);
        } else {
            $data = trim($data);
            $arr[$key] = $mysqli->real_escape_string($data);
        }
    }
    return $arr;
}

function validateEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function sanitizeEmail($email){
    return filter_var($email, FILTER_SANITIZE_EMAIL);
}

function sanitizeString($string){
    return filter_var($string, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
}

function sanitizeNumberInt($number){
    return filter_var($number, FILTER_SANITIZE_NUMBER_INT);
}