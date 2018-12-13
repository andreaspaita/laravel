<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Task;
class TaskController extends Controller
{
    public function index()
    {
         	return response()->json([$response=array('test','toto')], 200);
    }
    public function store(Request $request)
    {
        $task = new Task();
        $task->name = serialize($request->input('name'));


        if($task->save())
        {

            return response()->json('task save', 200);
        }
        else
        {
            return response()->json('not task save', 404);
        }

    }

    public function Curlstore(Request $request)  {

        $task = new Task();
        $task->name = $request->input('name');
        if($task->save())
        {
            header("Access-Control-Allow-Origin: *");
            return response()->json('task save', 200);
        }

    }
}
