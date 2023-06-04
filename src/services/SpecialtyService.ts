import { useWorkspace } from "@/composables/useWallet";
import { fetchSpecialtyAccount, fetchIdAccount } from "./FetchAccountService"

class SpecialtyService {

    private workspace: any;

    constructor() {
        this.workspace = useWorkspace()
    }

    async getAllSpecialtysForDegree(id: number) {

        const specialties = [];
        const smaller_specialty_id_available: number = (await fetchIdAccount(this.workspace.program.value, "specialty")).smallerIdAvailable

        for (let i = 1; i < smaller_specialty_id_available; i++) {
            const specialty = await fetchSpecialtyAccount(this.workspace.program.value, i)
            if (specialty.degreeId == id) {
                specialties.push(specialty)
            }
        }

        return specialties;
    }


}

export default SpecialtyService