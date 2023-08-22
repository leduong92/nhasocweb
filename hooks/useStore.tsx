"use client"
import { AppContext } from "@/store/globalState";
import { useContext } from "react"

export const useStore = () => {
    const { state, dispatch } = useContext(AppContext)

    return { state, dispatch };
}