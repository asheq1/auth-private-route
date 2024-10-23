import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-2">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <p>New here? <Link to="/register">
                        <button className="btn btn-active btn-link">Register</button>
                    </Link></p>
                </form>
                
                </div>
            </div>
        </div>
    );
};

export default Login;