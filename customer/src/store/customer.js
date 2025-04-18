import { create } from "zustand"
import { createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"

let useUserStore = create(persist(
immer((set) => (
    {
        user: {},
        isuser: false,
         login: (user) => set(
            (state) => {
                state.user = user 
                state.isuser = true
            }
         ),

         logout : () => set(
            (state) => {
                state.user = {}
                state.isuser = false
            }
         )

         
    }),
),

{
     name: "userstore",
     storage:createJSONStorage(()=>sessionStorage),
})
)
export default useUserStore