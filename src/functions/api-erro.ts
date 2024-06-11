import axios from "axios";

export default function apiError(error: unknown):{data: null, ok: false, error: string}{
    if (axios.isAxiosError(error) && error.response) {
        return {data: null, ok: false, error: error.response.data.message,}
    } else {
        return {data: null, ok: false, error: "Erro generico"}
    }

}