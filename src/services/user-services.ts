import { User } from "../users-list/types/user-types";
import { apiClient } from "./api-client";

export default class UserServices {
    getUsersDataService() {
        return apiClient.get("/users")
    }

    addUserDataService(user: User) {
        return apiClient.post("/users", user)
    }

    updateUserDataService(user: User) {
        return apiClient.put(`/users/${user.id}`, user)
    }

    deleteUserDataService(id: number) {
        return apiClient.delete(`/users/${id}`)
    }
}