export const sendEmail = createAsyncThunk(
	"sendEmail",
	async (email, thunkAPI) => {
		try {
			const response = await axios.post(
				`http://localhost:3000/sendEmail/`,
				email
			);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
