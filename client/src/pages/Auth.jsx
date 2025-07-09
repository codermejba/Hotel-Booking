import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import LoadingEffect from "../components/LoadingEffect";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // navigation calling from react router dom
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await loginUser(data);

      if (response.error) {
        throw new Error(response.message);
      }

      toast.success(response.message);
      sessionStorage.setItem("token", response.token);
      setLoading(false);
      navigate("/dashboard");
      //reset();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer />
      <div
        className="card p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email"  className="form-label">Email address</label>
            <input
            id="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password"  className="form-label">Password</label>
            <input
            id="password"
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}

            {/* 👁️ Eye icon toggle */}
            <button
              type="button"
              className=" bg-transparent border-0 position-absolute bottom-0 end-0 me-2"
              style={{ transform: 'translateY(-35%)'}}
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              <i
                className={`bi ${showPassword ? "bi-eye" :"bi-eye-slash" }`}
              ></i>
            </button>
          </div>

          <button
            type="submit"
            className=" text-white  btn primary-bg border-1 primary-border link-dark w-100 position-relative "
          >
            <LoadingEffect loading={loading} />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
