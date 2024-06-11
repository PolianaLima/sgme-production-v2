import {jwtVerify} from "jose";

export default async function verifyToken(token: string) {
    if (!token) return false;
    try {
       await jwtVerify(token, new TextEncoder().encode(process.env.JWL_SALT), {
            algorithms: ["HS256"]
        });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}