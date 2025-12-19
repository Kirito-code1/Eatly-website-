import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
        <Link to={'/'}>На главную</Link>
        <h1>Страница не найдена</h1>
        </>
    )
}