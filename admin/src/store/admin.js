import { create } from "zustand"
import { createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"


export let useAdminStore = create(persist(
immer((set) => (
    {
        user: {},
        isadmin: false,
         login: (admin) => set(
            (state) => {
                state.admin = admin 
                state.isadmin = true
            }
         ),

         logout : () => set(
            (state) => {
                state.admin = {}
                state.isadmin = false
            }
         )

         
    }),
),

{
     name: "adminstore",
     storage:createJSONStorage(()=>sessionStorage),
})
)