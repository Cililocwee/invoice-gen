import { DownloadIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface DownloadButtonProps {
  invoice: any;
}

export default function DownloadButton({ invoice }: DownloadButtonProps) {
  return (
    <Button
      backgroundColor={"green"}
      color={"white"}
      onClick={() => alert("Do something")}
    >
      <DownloadIcon />
      Download
    </Button>
  );
}
