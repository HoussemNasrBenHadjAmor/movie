import { Fragment } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, trailerState } from '../atoms/modalAtom'

import YouTube from 'react-youtube'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [trailer, setTrailer] = useRecoilState(trailerState)
  const youtubeOpt = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  const onPlayReady = (e) => {
    e.target.pauseVideo()
  }

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => {
          setShowModal(false)
          setTrailer(null)
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-[1.5px]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl transition-all">
                <YouTube
                  videoId={trailer}
                  opts={youtubeOpt}
                  onReady={onPlayReady}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
