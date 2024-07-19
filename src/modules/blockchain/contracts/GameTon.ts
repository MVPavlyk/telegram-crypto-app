import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from 'ton-core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: 'ChangeOwner';
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk';
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type CreateTonGame = {
  $$type: 'CreateTonGame';
  id: bigint;
  entryAmount: bigint;
  size: bigint;
};

export function storeCreateTonGame(src: CreateTonGame) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3657567570, 32);
    b_0.storeUint(src.id, 64);
    b_0.storeUint(src.entryAmount, 64);
    b_0.storeUint(src.size, 8);
  };
}

export function loadCreateTonGame(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3657567570) {
    throw Error('Invalid prefix');
  }
  let _id = sc_0.loadUintBig(64);
  let _entryAmount = sc_0.loadUintBig(64);
  let _size = sc_0.loadUintBig(8);
  return { $$type: 'CreateTonGame' as const, id: _id, entryAmount: _entryAmount, size: _size };
}

function loadTupleCreateTonGame(source: TupleReader) {
  let _id = source.readBigNumber();
  let _entryAmount = source.readBigNumber();
  let _size = source.readBigNumber();
  return { $$type: 'CreateTonGame' as const, id: _id, entryAmount: _entryAmount, size: _size };
}

function storeTupleCreateTonGame(source: CreateTonGame) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.id);
  builder.writeNumber(source.entryAmount);
  builder.writeNumber(source.size);
  return builder.build();
}

function dictValueParserCreateTonGame(): DictionaryValue<CreateTonGame> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCreateTonGame(src)).endCell());
    },
    parse: (src) => {
      return loadCreateTonGame(src.loadRef().beginParse());
    },
  };
}

export type CloseGame = {
  $$type: 'CloseGame';
  players: Dictionary<Address, number>;
  winAmount: bigint;
};

export function storeCloseGame(src: CloseGame) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1249450971, 32);
    b_0.storeDict(src.players, Dictionary.Keys.Address(), Dictionary.Values.Uint(8));
    b_0.storeInt(src.winAmount, 257);
  };
}

export function loadCloseGame(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1249450971) {
    throw Error('Invalid prefix');
  }
  let _players = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Uint(8), sc_0);
  let _winAmount = sc_0.loadIntBig(257);
  return { $$type: 'CloseGame' as const, players: _players, winAmount: _winAmount };
}

function loadTupleCloseGame(source: TupleReader) {
  let _players = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(8), source.readCellOpt());
  let _winAmount = source.readBigNumber();
  return { $$type: 'CloseGame' as const, players: _players, winAmount: _winAmount };
}

function storeTupleCloseGame(source: CloseGame) {
  let builder = new TupleBuilder();
  builder.writeCell(
    source.players.size > 0
      ? beginCell().storeDictDirect(source.players, Dictionary.Keys.Address(), Dictionary.Values.Uint(8)).endCell()
      : null
  );
  builder.writeNumber(source.winAmount);
  return builder.build();
}

function dictValueParserCloseGame(): DictionaryValue<CloseGame> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCloseGame(src)).endCell());
    },
    parse: (src) => {
      return loadCloseGame(src.loadRef().beginParse());
    },
  };
}

export type JoinGame = {
  $$type: 'JoinGame';
  amount: bigint;
};

export function storeJoinGame(src: JoinGame) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1823621823, 32);
    b_0.storeInt(src.amount, 257);
  };
}

export function loadJoinGame(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1823621823) {
    throw Error('Invalid prefix');
  }
  let _amount = sc_0.loadIntBig(257);
  return { $$type: 'JoinGame' as const, amount: _amount };
}

function loadTupleJoinGame(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: 'JoinGame' as const, amount: _amount };
}

function storeTupleJoinGame(source: JoinGame) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserJoinGame(): DictionaryValue<JoinGame> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJoinGame(src)).endCell());
    },
    parse: (src) => {
      return loadJoinGame(src.loadRef().beginParse());
    },
  };
}

export type InternalAdd = {
  $$type: 'InternalAdd';
  amount: bigint;
  origin: Address;
};

export function storeInternalAdd(src: InternalAdd) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(306259763, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.origin);
  };
}

export function loadInternalAdd(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 306259763) {
    throw Error('Invalid prefix');
  }
  let _amount = sc_0.loadCoins();
  let _origin = sc_0.loadAddress();
  return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAdd(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _origin = source.readAddress();
  return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAdd(source: InternalAdd) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.origin);
  return builder.build();
}

function dictValueParserInternalAdd(): DictionaryValue<InternalAdd> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeInternalAdd(src)).endCell());
    },
    parse: (src) => {
      return loadInternalAdd(src.loadRef().beginParse());
    },
  };
}

export type Transfer = {
  $$type: 'Transfer';
  amount: bigint;
  to: Address;
};

export function storeTransfer(src: Transfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1943715420, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.to);
  };
}

export function loadTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1943715420) {
    throw Error('Invalid prefix');
  }
  let _amount = sc_0.loadCoins();
  let _to = sc_0.loadAddress();
  return { $$type: 'Transfer' as const, amount: _amount, to: _to };
}

function loadTupleTransfer(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _to = source.readAddress();
  return { $$type: 'Transfer' as const, amount: _amount, to: _to };
}

function storeTupleTransfer(source: Transfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.to);
  return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadTransfer(src.loadRef().beginParse());
    },
  };
}

type GameTon_init_args = {
  $$type: 'GameTon_init_args';
  id: bigint;
  size: bigint;
  entryAmount: bigint;
  owner: Address;
};

function initGameTon_init_args(src: GameTon_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.id, 257);
    b_0.storeInt(src.size, 257);
    b_0.storeInt(src.entryAmount, 257);
    let b_1 = new Builder();
    b_1.storeAddress(src.owner);
    b_0.storeRef(b_1.endCell());
  };
}

async function GameTon_init(id: bigint, size: bigint, entryAmount: bigint, owner: Address) {
  const __code = Cell.fromBase64(
    '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'
  );
  const __system = Cell.fromBase64(
    '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'
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initGameTon_init_args({ $$type: 'GameTon_init_args', id, size, entryAmount, owner })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const GameTon_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  24192: { message: `win amount must be greater than entry amount` },
  26297: { message: `enter amount does not match` },
  27850: { message: `game still in progress` },
  35247: { message: `user could not withdraw` },
  38734: { message: `you should pay more to cover gas` },
  42992: { message: `game has been already started!` },
};

const GameTon_types: ABIType[] = [
  {
    name: 'StateInit',
    header: null,
    fields: [
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'Context',
    header: null,
    fields: [
      { name: 'bounced', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'sender', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'SendParameters',
    header: null,
    fields: [
      { name: 'bounce', type: { kind: 'simple', type: 'bool', optional: false } },
      { name: 'to', type: { kind: 'simple', type: 'address', optional: false } },
      { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'mode', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
    ],
  },
  {
    name: 'ChangeOwner',
    header: 2174598809,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'newOwner', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'ChangeOwnerOk',
    header: 846932810,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'newOwner', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'Deploy',
    header: 2490013878,
    fields: [{ name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } }],
  },
  {
    name: 'DeployOk',
    header: 2952335191,
    fields: [{ name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } }],
  },
  {
    name: 'FactoryDeploy',
    header: 1829761339,
    fields: [
      { name: 'queryId', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'cashback', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'CreateTonGame',
    header: 3657567570,
    fields: [
      { name: 'id', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'entryAmount', type: { kind: 'simple', type: 'uint', optional: false, format: 64 } },
      { name: 'size', type: { kind: 'simple', type: 'uint', optional: false, format: 8 } },
    ],
  },
  {
    name: 'CloseGame',
    header: 1249450971,
    fields: [
      { name: 'players', type: { kind: 'dict', key: 'address', value: 'uint', valueFormat: 8 } },
      { name: 'winAmount', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
    ],
  },
  {
    name: 'JoinGame',
    header: 1823621823,
    fields: [{ name: 'amount', type: { kind: 'simple', type: 'int', optional: false, format: 257 } }],
  },
  {
    name: 'InternalAdd',
    header: 306259763,
    fields: [
      { name: 'amount', type: { kind: 'simple', type: 'uint', optional: false, format: 'coins' } },
      { name: 'origin', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
  {
    name: 'Transfer',
    header: 1943715420,
    fields: [
      { name: 'amount', type: { kind: 'simple', type: 'uint', optional: false, format: 'coins' } },
      { name: 'to', type: { kind: 'simple', type: 'address', optional: false } },
    ],
  },
];

const GameTon_getters: ABIGetter[] = [
  { name: 'id', arguments: [], returnType: { kind: 'simple', type: 'int', optional: false, format: 257 } },
  { name: 'players', arguments: [], returnType: { kind: 'dict', key: 'address', value: 'uint', valueFormat: 8 } },
  { name: 'status', arguments: [], returnType: { kind: 'simple', type: 'int', optional: false, format: 257 } },
  { name: 'balance', arguments: [], returnType: { kind: 'simple', type: 'int', optional: false, format: 257 } },
  { name: 'winAmount', arguments: [], returnType: { kind: 'simple', type: 'int', optional: false, format: 257 } },
  { name: 'owner', arguments: [], returnType: { kind: 'simple', type: 'address', optional: false } },
];

const GameTon_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'JoinGame' } },
  { receiver: 'internal', message: { kind: 'text', text: 'withdraw' } },
  { receiver: 'internal', message: { kind: 'text', text: 'withdraw-all' } },
  { receiver: 'internal', message: { kind: 'typed', type: 'CloseGame' } },
  { receiver: 'internal', message: { kind: 'typed', type: 'Deploy' } },
];

export class GameTon implements Contract {
  static async init(id: bigint, size: bigint, entryAmount: bigint, owner: Address) {
    return await GameTon_init(id, size, entryAmount, owner);
  }

  static async fromInit(id: bigint, size: bigint, entryAmount: bigint, owner: Address) {
    const init = await GameTon_init(id, size, entryAmount, owner);
    const address = contractAddress(0, init);
    return new GameTon(address, init);
  }

  static fromAddress(address: Address) {
    return new GameTon(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: GameTon_types,
    getters: GameTon_getters,
    receivers: GameTon_receivers,
    errors: GameTon_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: JoinGame | 'withdraw' | 'withdraw-all' | CloseGame | Deploy
  ) {
    let body: Cell | null = null;
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JoinGame') {
      body = beginCell().store(storeJoinGame(message)).endCell();
    }
    if (message === 'withdraw') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'withdraw-all') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CloseGame') {
      body = beginCell().store(storeCloseGame(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getId(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('id', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getPlayers(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('players', builder.build())).stack;
    let result = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(8), source.readCellOpt());
    return result;
  }

  async getStatus(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('status', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getBalance(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('balance', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getWinAmount(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('winAmount', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('owner', builder.build())).stack;
    let result = source.readAddress();
    return result;
  }
}
