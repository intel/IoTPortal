<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response([
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ], Response::HTTP_BAD_REQUEST);
        }

        $request['password'] = Hash::make($request['password']);
        $user = User::create($request->toArray());
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;

        $response = ['success'=> true, 'token' => $token];

        return response($response, Response::HTTP_OK);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response([
                'success' => false,
                'errors' => $validator->getMessageBag()->toArray()
            ], Response::HTTP_BAD_REQUEST);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
            $response = ['success'=> true, 'token' => $token];
            return response($response, Response::HTTP_OK);
        } else {
            $response = ['success' => false, 'error' => 'Wrong email or password entered.'];
            return response($response, Response::HTTP_UNAUTHORIZED);
        }
    }

    public function logout(Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['success'=> true, 'message' => 'You have been successfully logged out!'];
        return response($response, Response::HTTP_OK);
    }
}
