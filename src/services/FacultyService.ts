import { useWorkspace } from "@/composables/useWallet";
import { fetchFacultyAccount, fetchIdAccount } from "./FetchAccountService"

class FacultyService {

    private workspace: any;

    constructor() {
        this.workspace = useWorkspace()
    }

    async getAllFaculties() {

        const faculties = [];
        const smaller_faculty_id_available: number = (await fetchIdAccount(this.workspace.program.value, "faculty")).smallerIdAvailable

        for (let i = 1; i < smaller_faculty_id_available; i++) {
            const faculty = await fetchFacultyAccount(this.workspace.program.value, i)
            faculties.push(faculty)
        }

        return faculties;
    }


}

export default FacultyService