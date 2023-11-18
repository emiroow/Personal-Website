import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DeleteAdminFile,
  SetAdminUpload,
  getAdminUploads,
} from "../../Service";

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

export const fetchRemoveImage = createAsyncThunk(
  "/uploads/fetchRemoveImage",
  async (id) => {
    const response = await DeleteAdminFile(id);
    return { status: response.status, id: id };
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

    // remove image
    builder.addCase(fetchRemoveImage.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(fetchRemoveImage.fulfilled, (state, action) => {
      state.loader = false;
      const filter = state.uploadFiles.filter(
        (item) => item.id !== action.payload.id
      );
      state.uploadFiles = filter;
    });
  },
});

export const { changeModalState } = UploadsSlice.actions;

export default UploadsSlice.reducer;
