<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class userController extends Controller
{

    //handle the cors request for the api endpoints





    // Create Post Method for User Registration

    public function addUser(Request $request): JsonResponse
    {
        //check if the user is already registered first before registering if not register the user and return the user details  if registered return the error message
        try {
            $this->validate($request, [
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
            ]);
            $user = new User();
            $this->extracted($request, $user);
            return response()->json(['message' => 'User Registered Successfully', 'user' => $user], 200);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    // Create Get Method for User Login

    public function getAllUsers(): JsonResponse
    {
        try {
            $users = User::all();
            return response()->json(['message' => 'Users Fetched Successfully', 'users' => $users], 200);
        } catch (Exception $e) {
            return response()->json( $e->getMessage(), 500);
        }
    }

    //Get User By Id
    public function getUserById($id): JsonResponse
    {
        try {
            $user = User::find($id);
            if ($user) {
                return response()->json(['200' => 'OK', 'user' => $user]);
            }
            return response()->json(['404' => 'No user was found']);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    //Create Update Method for User Update
    public function updateUser(Request $request, $id): JsonResponse
    {
        try {
            $user = User::find($id);
            //handle the email if trying to update the email and the email is already registered in the database
            if ($request->has('email')) {
                $this->validate($request, [
                    'email' => 'required|string|email|max:255|unique:users',
                ]);
            }
            if ($user) {
                $this->extracted($request, $user);
                return response()->json(['message' => 'User Updated Successfully', 'user' => $user], 200);
            }
            return response()->json(['404' => 'No user was found']);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    //Create Delete Method for User Delete and handle it for react

    public function deleteUser($id): JsonResponse
    {
        try {
            $user = User::find($id);
            if ($user) {
                $user->delete();
                return response()->json(['success' => 'User Deleted Successfully']);
            }
            return response()->json(['404' => 'No user was found']);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

   //check if the email is already registered in the database
    public function checkEmail(Request $request,$email): JsonResponse
    {
        //if the email is already registered return the error message
        try {
            $user = User::where('email', $email)->first();
            if ($user) {
                return response()->json(['message' => 'Email already registered'], 200);
            }
            return response()->json(['message' => 'Email is available'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    //function to handle login
    public function login(Request $request): JsonResponse
    {
        try {
            $this->validate($request, [
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:6',
            ]);
            $user = User::where('email', $request->email)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('MyApp')->accessToken; //create token for the user and return it to the user

                    return response()->json(['token' => $token,'user' => $user], 200);
                }
                return response()->json(['message' => 'Password is incorrect'], 200);
            }
            return response()->json(['message' => 'Email is not registered'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * @param  Request  $request
     * @param $user
     *
     * @return void
     */
    public function extracted(Request $request, $user): void
    {
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->last_login = now();
        $user->is_admin = 0;
        $user->save();
    }


}


