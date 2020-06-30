import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm'
import TransactionsRepository from '../repositories/TransactionsRepository';


class DeleteTransactionService {
  public async execute(id: string): Promise<void> {

    const transactionRepository = getCustomRepository(TransactionsRepository);

    const verifyExistis = await transactionRepository.findOne(id)

    if (!verifyExistis) {
      throw new Error('Transaction does not existis')
    }

    await transactionRepository.remove(verifyExistis)
  }
}

export default DeleteTransactionService;
