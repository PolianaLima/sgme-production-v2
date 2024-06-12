import axios from "axios";

type ApiError = {
    data: null;
    ok: false;
    error: string;
}

export default function apiError(error:unknown): ApiError{
    let message = "Ocorreu um erro inesperado";
    if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message || message;
    } else if (error instanceof Error) {
        message = error.message;
    }
    return {
        data: null,
        ok: false,
        error: message,
    };

}