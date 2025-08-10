import React from "react";
import { Loader2 } from "lucide-react";

const AdminBtn = ({ text, loading = false }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 bg-[#0b9ba6] hover:bg-[#025876] text-white font-medium py-2 px-4 rounded-lg transition disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin w-5 h-5" />
          Processing...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default AdminBtn;
