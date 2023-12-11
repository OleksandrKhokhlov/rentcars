import { Grid } from "react-loader-spinner";

export const Loader = () => {
    return (
      <Grid
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ position: 'fixed', left: '50%', top: '50%' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#357e97"
        color="#4cac2f"
      />
    );
}