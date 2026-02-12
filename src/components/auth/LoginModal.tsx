"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Mail, Lock } from "lucide-react"

import { Modal } from "@/components/ui/Modal"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/hooks/useAuth"

interface LoginFormValues {
  email: string
  password: string
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

export const LoginModal = () => {
  const { isLoginOpen, closeLogin, login, openSignUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: LoginFormValues) => {
    login(data.email, data.password)
    reset()
  }

  return (
    <Modal isOpen={isLoginOpen} onClose={closeLogin} title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("email")}
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={16} />}
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock size={16} />}
          error={errors.password?.message}
        />
        <Button type="submit" fullWidth>
          Login
        </Button>
        <p className="text-center text-sm text-text-secondary">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={openSignUp}
            className="text-accent hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </Modal>
  )
}
