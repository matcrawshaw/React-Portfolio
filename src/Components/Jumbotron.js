import React from "react";
import { MantineProvider , Container } from '@mantine/core';


function Jumbotron () {
<MantineProvider theme={{
colorScheme: "dark"
}}>
    
<Container withGlobalStyles withNormalizeCSS >

<h2>Jumbotron</h2>


</Container>
</MantineProvider>
}

export default Jumbotron;