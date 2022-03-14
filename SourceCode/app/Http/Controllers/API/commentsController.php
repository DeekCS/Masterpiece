<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Comments;
use Exception;
use Illuminate\Http\Request;

class commentsController extends Controller
{
    //Create a new comment for a post method (POST)
    public function createComment(Request $request)
    {
        try{
            $comment = new Comments();
            //validate the request
            $this->validate($request, [
                'post_id' => 'required',
                'user_id' => 'required',
                'comment' => 'required',
            ]);
            $comment-> comment = $request->input('comment');
            $comment->img = $request->input('img');
            $comment->post_id = $request->input('post_id');
            $comment->user_id = $request->input('user_id');
            $comment->save();
            return response()->json($comment, 201);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error creating new comment', 'error' => $e->getMessage()], 400);
        }
    }

    //Get all comments for a post method (GET)
    public function getAllComments($post_id)
    {
       //handle errors if post not passed
        if(!$post_id){
            return response()->json(['message' => 'Post id is required'], 400);
        }
        try{
            $comments = Comments::where('post_id', $post_id)->get();
            return response()->json($comments, 200);
            //api will be like :
            //http://localhost:8000/api/posts/1/comments (get all comments for post 1)
            //generic route : http://localhost:8000/api/posts/{post_id}/comments (get all comments for post 1)
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error getting comments', 'error' => $e->getMessage()], 400);
        }
    }


    //Get a comment by id method (GET)
    public function getCommentById($id)
    {
       //get comment by id
        try{
            $comment = Comments::find($id);
            if(!$comment){
                return response()->json(['message' => 'Comment not found'], 404);
            }
            return response()->json($comment, 200);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error getting comment', 'error' => $e->getMessage()], 400);
        }

    }

    //get comments by post id method (GET)
    public function getCommentsByPostId($post_id)
    {
        //get comments by post id
        try{
            $comments = Comments::where('post_id', $post_id)->get();
            if(!$comments){
                return response()->json(['message' => 'Comments not found'], 404);
            }
            return response()->json($comments, 200);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error getting comments', 'error' => $e->getMessage()], 400);
        }
    }

    //get comments by user id method (GET)
    public function getCommentsByUserId($user_id)
    {
        //get comments by user id
        try{
            $comments = Comments::where('user_id', $user_id)->get();
            if(!$comments){
                return response()->json(['message' => 'Comments not found'], 404);
            }
            return response()->json($comments, 200);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error getting comments', 'error' => $e->getMessage()], 400);
        }
    }


    //Update a comment method (PUT)
    public function updateComment(Request $request, $id)
    {
        try{
            $comment = Comments::find($id);
            //validate the request
            $this->validate($request, [
                'comment' => 'required',
            ]);
            $comment-> comment = $request->input('comment');
            $comment->img = $request->input('img');
            $comment->save();
            return response()->json($comment, 200);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error updating comment', 'error' => $e->getMessage()], 400);
        }
    }


    //Delete a comment method (DELETE)
    public function delete($id)
    {
        try{
            $comment = Comments::find($id);
            $comment->delete();
            return response()->json(['message' => 'Comment deleted successfully'], 200);
        }
        catch (Exception $e) {
            return response()->json(['message' => 'Error deleting comment', 'error' => $e->getMessage()], 400);
        }
    }
}
