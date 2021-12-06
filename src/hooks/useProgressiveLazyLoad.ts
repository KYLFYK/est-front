import React from 'react'

export const useProgressiveImage = (src: string | null): string | null => {  
    const [sourceLoaded, setSourceLoaded] = React.useState<string | null>(null)

    React.useEffect(() => {
    if (!src) return

      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])
  
    return sourceLoaded
  }