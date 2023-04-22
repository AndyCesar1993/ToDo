import { Skeleton } from "@mui/material"

const Loading = () => {
    return (
    <>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} style={{marginTop:"15px"}}/>
    </>
    )
}

export default Loading
