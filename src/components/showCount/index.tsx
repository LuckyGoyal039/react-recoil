import { useRecoilValue } from "recoil"
import { countAtom } from "../../store/atoms/count"

export default function ShowCount() {
    console.log('show count rerender')
    const count = useRecoilValue(countAtom)
    return (

        <p>{count}</p>

    )
}