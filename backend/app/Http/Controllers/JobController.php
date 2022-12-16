<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function post(Request $request)
    {
        // The user is logged in...

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255'
        ]);
        if (isset($request->skills)) {
            $tags = $request->skills;
        }
        if (isset($request->skills1) && isset($tags)) {
            $tags = $tags . ',' . $request->skills1;
        } else if (isset($request->skills1)) {
            $tags = $request->skills1;
        }
        if (isset($request->skills2) && isset($tags)) {
            $tags = $tags . ',' . $request->skills2;
        } else if (isset($request->skills2)) {
            $tags = $request->skills2;
        }

        $user = Job::create([
            'title' => $request->title,
            'tags' => $tags,
            'email' => $request->email,
            'description' => $request->description,

        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Job posted successfully'
        ]);
    }
}
