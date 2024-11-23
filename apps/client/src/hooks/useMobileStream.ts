import { useRef, useState } from 'react';

export const useMobileStream = () => {
  const [isStreaming, setIsStreaming] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: true,
      });

      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=h2264',
      });

      mediaRecorder.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const blob = new Blob([event.data], { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          console.log(url);
        }
      };

      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.start(1000);
      setIsStreaming(true);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to start stream');
    }
  };

  const stopStream = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    setIsStreaming(false);
  };

  return { isStreaming, startStream, stopStream };
};
