import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  
    const mintNFT = async () => {
      await window.contract.nft_mint(
        {
          token_id: `${window.accountId}-Swollet`,
          metadata: {
            title: "Swollet NFT Certificate",
            description: "you deserve it :)",
            media:
             "https://bafkreidy47v4tlleig4cztqxzzpwby7wd4ush2p5xgfbbqxtvnmwftcigy.ipfs.dweb.link/",
          },
          
          receiver_id: window.accountId,
        },
        300000000000000, // attached GAS (optional)
        new BN("1000000000000000000000000")
      );
    };

  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}>
          <p>
          Step 2: After you have logged in, hit this button to mint your "NFT
            Certificate" Token and go your{" "}
            <a href='https://wallet.near.org/'> wallet</a> and see your
            NFT
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Button
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "50vw" }}
          >
            Mint NFT
          </Button>
        </Row>
        <Row className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                bruh/sis.... You have an NFT already. You can see it{" "}
                <a href={"https://wallet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
