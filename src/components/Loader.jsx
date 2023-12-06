import { Grid } from "react-loader-spinner";

export const Loader = () => {
    return (
      <Grid
        visible={false}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ position: 'fixed', left: '50%', top: '50%' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#4d8a9f"
        color="#b7d24c"
      />
    );
}