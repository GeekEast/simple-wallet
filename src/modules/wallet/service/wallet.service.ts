import { Inject, Service } from "typedi"

import { Trace } from "../../../utils/logger/trace.util"
import { AddressEntity } from "../entity/address.entity"
import { WalletRepo } from "../repo/wallet.repo"
import { GetHDSegWitAddressDto } from "../resolver/getHDSegWitAddress.dto"

@Trace({ perf: true, logInput: { enabled: true, beautify: true } })
@Service()
export class WalletService {
  @Inject()
  walletRepo: WalletRepo

  async getHDSegWitAddressBySeedAndPath(getHDSegWitAddressDto: GetHDSegWitAddressDto): Promise<AddressEntity> {
    return this.walletRepo.getHDSegwitAddressBySeedAndPath(getHDSegWitAddressDto)
  }
}