import axios from "axios";

type ApiError = {
    data: null;
    ok: false;
    error: string;
}

export default function apiError(error: unknown): ApiError {
    let errorMessage = "Ocorreu um erro inesperado";
    if (axios.isAxiosError(error)) {
        if (error.response) {
            errorMessage = error.response.data?.message || "Erro desconhecido do servidor";
        } else if (error.request) {
            errorMessage = "Nenhuma resposta do servidor. Por favor, verifique sua conexão de rede.";
        } else {
            errorMessage = error.message;
        }
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    console.log("Erro:", errorMessage);

    return {
        data: null,
        ok: false,
        error: errorMessage
    };

}