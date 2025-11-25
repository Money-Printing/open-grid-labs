import React, { useState, type DragEvent, type ChangeEvent } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    document.getElementById("dropzone-file-2")?.click();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="flex flex-col items-center justify-center w-full h-64 bg-black text-white border border-dashed border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition-colors"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center text-center pt-5 pb-6 px-4">
          <svg
            className="w-8 h-8 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
            />
          </svg>

          {file ? (
            <p className="mb-2 font-semibold">{file.name}</p>
          ) : (
            <>
              <p className="mb-2 text-sm">Drag & drop a file here or click the button below</p>
              <p className="text-xs mb-4">
                Max. File Size: <span className="font-semibold">30MB</span>
              </p>
            </>
          )}

          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center text-white bg-black border border-white hover:bg-white hover:text-black font-medium rounded px-3 py-2 text-sm transition-colors"
          >
            <svg
              className="w-4 h-4 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            Browse file
          </button>
        </div>
      </div>

      <input
        id="dropzone-file-2"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
