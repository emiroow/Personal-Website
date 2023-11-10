import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SetAdminUpload, getAdminUploads } from "../../Service";

export const fetchGetUploads = createAsyncThunk(
  "/uploads/fetchGetUploads",
  async (data) => {
    const response = await getAdminUploads();
    return { data: response.data, status: response.status };
  }
);

export const fetchUploadImage = createAsyncThunk(
  "/uploads/fetchUploadImage",
  async (data) => {
    const response = await SetAdminUpload(data);
    return { data: response.data, status: response.status };
  }
);

const UploadsSlice = createSlice({
  name: "uploads",
  initialState: {
    uploadFiles: [],
    loader: false,
    modal: false,
    detailModal: false,
  },
  reducers: {
    changeModalState: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetUploads.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(fetchGetUploads.fulfilled, (state, action) => {
      state.uploadFiles = action.payload.data;
      state.loader = false;
    });
    builder.addCase(fetchGetUploads.rejected, (state, action) => {
      state.loader = false;
    });

    // Upload Image
    builder.addCase(fetchUploadImage.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(fetchUploadImage.fulfilled, (state, action) => {
      state.loader = false;
    });
  },
});

export const { changeModalState } = UploadsSlice.actions;

export default UploadsSlice.reducer;
