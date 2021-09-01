<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function __construct()
    {
        $this->middleware('throttle:5,1', ['except' => 'showLinkRequestForm']);
    }

    /**
     * Send a reset link to the given user.
     *
     * @param Request $request
     * @return RedirectResponse|JsonResponse
     */
    public function sendResetLinkEmail(Request $request)
    {
        $this->validateEmail($request);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        // Prevent timing attack to enumerate users.
        usleep(500000 + random_int(0, 1500000));

        // Treat all three cases 'invalid user', 'reset link sent', and 'reset link not sent due to throttling'
        // the same, with a suitable message, again, to prevent user enumeration attack.
        return in_array($response, [Password::INVALID_USER, Password::RESET_LINK_SENT, Password::RESET_THROTTLED])
            ? $this->sendResetLinkResponse($request, Password::RESET_LINK_SENT)
            : $this->sendResetLinkFailedResponse($request, $response);
    }
}
