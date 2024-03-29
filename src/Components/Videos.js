import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos,direction}) => {

    if(!videos?.length) return 'Loading...'
    return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item,ind)=>(
        <Box key={ind}>
            {(item.id.videoId || item.id.playlistId) && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
    ))}
    </Stack>
  )
}

export default Videos