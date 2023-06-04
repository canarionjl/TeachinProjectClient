import { TeachingProjectHandler } from "@/program/types/teaching_project_handler";
import { Program } from "@project-serum/anchor";
import { useWorkspace } from "./useWallet";


export function numberToLEBytes(param: number): Uint8Array {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setUint32(0, param, true);
  const bytes = new Uint8Array(buffer);
  return bytes;
}

export const getCourse = async (course: number) => {

  if (course > 9) return 0;

  const { program } = useWorkspace()

  return program.value.idl.types[4].type.variants[course]

}

export const courseList = ["Todos","1º","2º","3º","4º","5º","6º","7º","8º","9º"]
