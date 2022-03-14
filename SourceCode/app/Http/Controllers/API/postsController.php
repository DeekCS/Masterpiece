<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Posts;
use Exception;
use Illuminate\Http\Request;

class postsController extends Controller
{
    //Create a new post method
    public const POST_NOT_FOUND = 'Post not found';


    public function createPost(Request $request)
    {
        //Validate the request
        $this->validate($request, [
            'title'       => 'required',
            'description' => 'required',
            'user_id'     => 'required'
        ]);

        //Create a new post
        try {
            $post = new Posts();
            $post->title = $request->input('title');
            $post->description = $request->input('description');
            $post->user_id = $request->input('user_id');
            $post->save();

            return response()->json([
                'success' => true, 'message' => 'Post created successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'Post could not be created'
            ], 500);
        }
    }

    //Get all posts method and check if there is posts
    public function getAllPosts()
    {
        try {
            $posts = Posts::all();
            if (count($posts) > 0) {
                return response()->json(['success' => true, 'posts' => $posts],
                    200);
            } else {
                return response()->json([
                    'success' => false, 'message' => self::POST_NOT_FOUND
                ],
                    404);
            }
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'Posts could not be retrieved'
            ], 500);
        }
    }

    //Get a single post method
    public function getPostById($id)
    {
        try {
            $post = Posts::find($id);
            if ($post) {
                return response()->json(['success' => true, 'post' => $post],
                    200);
            } else {
                return response()->json([
                    'success' => false, 'message' => self::POST_NOT_FOUND
                ],
                    404);
            }
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'Post could not be retrieved'
            ], 500);
        }
    }


    //Update a post method

    public function updatePost(Request $request, $id)
    {
        //Validate the request
        $this->validate($request, [
            'title'       => 'required',
            'description' => 'required',
            'user_id'     => 'required'
        ]);

        //Update the post
        try {
            //Find the post
            $post = Posts::find($id);
            if ($post) {
                //Update the post
                $post->title = $request->input('title');
                $post->description = $request->input('description');
                $post->user_id = $request->input('user_id');
                $post->save();

                return response()->json([
                    'success' => true, 'message' => 'Post updated successfully'
                ], 200);
            } else {
                return response()->json([
                    'success' => false, 'message' => self::POST_NOT_FOUND
                ], 404);
            }
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'Post could not be updated'
            ], 500);
        }
    }

    //Delete a post method

    public function deletePost($id)
    {
        try {
            //Find the post
            $post = Posts::find($id);
            if ($post) {
                //Delete the post
                $post->delete();

                return response()->json([
                    'success' => true, 'message' => 'Post deleted successfully'
                ], 200);
            }

            return response()->json([
                'success' => false, 'message' => self::POST_NOT_FOUND
            ], 404);
        } catch (Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'Post could not be deleted'
            ], 500);
        }
    }
}
