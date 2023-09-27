import React from 'react'

type Props = {}

const SwitcherSkeleton = (props: Props) => {
    return (
        <div className=" animate-pulse rounded-full w-12 h-6 bg-indigo-800 opacity-30"></div>
      );
}

export default SwitcherSkeleton