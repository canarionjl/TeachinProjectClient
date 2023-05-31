"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWorkspace = exports.useWorkspace = void 0;
var vue_1 = require("vue");
var solana_wallets_vue_1 = require("solana-wallets-vue");
var web3_js_1 = require("@solana/web3.js");
var anchor_1 = require("@project-serum/anchor");
var teaching_project_handler_json_1 = require("@/program/idl/teaching_project_handler.json");
var preflightCommitment = "processed";
var commitment = "confirmed";
var programID = new web3_js_1.PublicKey(teaching_project_handler_json_1.default.metadata.address);
var workspace;
var useWorkspace = function () { return workspace; };
exports.useWorkspace = useWorkspace;
var initWorkspace = function () {
    var wallet = (0, solana_wallets_vue_1.useAnchorWallet)();
    var connection = new web3_js_1.Connection("http://127.0.0.1:8899", commitment);
    var provider = (0, vue_1.computed)(function () {
        return new anchor_1.AnchorProvider(connection, wallet.value, {
            preflightCommitment: preflightCommitment,
            commitment: commitment,
        });
    });
    var program = (0, vue_1.computed)(function () { return new anchor_1.Program(teaching_project_handler_json_1.default, programID, provider.value); });
    workspace = {
        wallet: wallet,
        connection: connection,
        provider: provider,
        program: program,
    };
};
exports.initWorkspace = initWorkspace;
