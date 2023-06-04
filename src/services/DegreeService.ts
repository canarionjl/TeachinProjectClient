import { useWorkspace } from "@/composables/useWallet";
import { fetchDegreeAccount, fetchIdAccount } from "./FetchAccountService"

class DegreeService {

    private workspace: any;

    constructor() {
        this.workspace = useWorkspace()
    }

    async getAllDegreesForFaculty(id: number) {

        const degrees = [];
        const smaller_degree_id_available: number = (await fetchIdAccount(this.workspace.program.value, "degree")).smallerIdAvailable

        for (let i = 1; i < smaller_degree_id_available; i++) {
            const degree = await fetchDegreeAccount(this.workspace.program.value, i)
            if (degree.facultyId == id) {
                degrees.push(degree)
            }
        }

        return degrees;
    }


}

export default DegreeService