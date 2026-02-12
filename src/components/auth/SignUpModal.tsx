"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Mail, Lock, User } from "lucide-react"

import { Modal } from "@/components/ui/Modal"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/hooks/useAuth"

interface SignUpFormValues {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const validationSchema = Yup.object({
  username: Yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
})

export const SignUpModal = () => {
  const { isSignUpOpen, closeSignUp, signUp, openLogin } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: SignUpFormValues) => {
    signUp(data.username, data.email, data.password)
    reset()
  }

  return (
    <Modal isOpen={isSignUpOpen} onClose={closeSignUp} title="Create Account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("username")}
          label="Username"
          placeholder="Choose a username"
          icon={<User size={16} />}
          error={errors.username?.message}
        />
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
          placeholder="Create a password"
          icon={<Lock size={16} />}
          error={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          icon={<Lock size={16} />}
          error={errors.confirmPassword?.message}
        />
        <Button type="submit" fullWidth>
          Sign Up
        </Button>
        <p className="text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <button
            type="button"
            onClick={openLogin}
            className="text-accent hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </Modal>
  )
}
