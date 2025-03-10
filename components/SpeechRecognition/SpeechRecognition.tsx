import { Mic } from "lucide-react";
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface SpeechRecognitionProps {
  setSourceText: React.Dispatch<React.SetStateAction<string>>;
}

const SpeechRecognitionComponent = ({
  setSourceText,
}: SpeechRecognitionProps) => {
  const { transcript, listening } = useSpeechRecognition();
  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };
  return (
    <div>
      <Mic size={22} className="text-gray-400" onClick={handleVoiceRecording} />
    </div>
  );
};

export default SpeechRecognitionComponent;
