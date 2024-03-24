import { useEffect } from "react";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import { useForm } from "react-hook-form"
import { useAuth } from "../Context/AuthProvider";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { login } = useAuth();

    return (
        <section className="h-[calc(100vh-30px)]">
            <div className="backdrop-blur-sm bg-white/10 opacity-100 w-80 h-80 mx-auto my-28 rounded-lg py-3 px-7">
                <div className="h-full w-full">
                    <div>
                        <p className="text-base font-semibold text-lg uppercase tracking-[.6em] text-center px-2 py-1">Login</p>
                    </div>
                    <form onSubmit={handleSubmit(login)}>
                        <Input
                            label="email"
                            type="email"
                            name="email"
                            placeholder=""
                            must
                            styles={{
                                className: "mx-auto"
                            }}
                            register={(name) => register(name, { required: "This is required" })}
                            strace
                            errors={errors}
                        />
                        <Input
                            label="password"
                            type="password"
                            name="password"
                            placeholder=""
                            must
                            styles={{
                                className: "mx-auto"
                            }}
                            register={(name) => register(name, { required: "This is required" })}
                            strace
                            errors={errors}
                        />
                        <Button
                            variant="base"
                            strace
                            name="login"
                            onClick={() => { }}
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}