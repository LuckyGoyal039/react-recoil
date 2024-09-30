import { useRecoilValue } from "recoil"
import { countAtom } from "../../store/atoms/count"

export default function IsEven() {
    const count = useRecoilValue(countAtom);
    return (
        <>
            {
                count % 2 == 0 ? <p>It is even</p> : null
            }
        </>
    )
}