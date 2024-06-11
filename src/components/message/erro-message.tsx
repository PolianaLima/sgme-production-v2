export default function ErrorMessage({error}: { error: string }) {
    if (error === "") return null;
    return<p style={{color: "red", margin:'1rem 0'}}>{error}</p>

}