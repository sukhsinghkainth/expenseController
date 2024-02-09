import express, { Request, Response } from 'express';
import ReqWithUser from '../../interfaces/Ireq';
import setBudgetService from '../../services/budgetService';
import transaction from '../../interfaces/ITransactions';
import Account, { AccountType } from '../../interfaces/IAccount';


const router = express.Router();

router.post('/setBudget', async (req: ReqWithUser, res: Response) => {
  try {
    const { categoryId, limit } = req.body;

    if (!categoryId || !limit) {
      return res.status(400).json({ error: 'Category ID and limit are required' });
    }

    await setBudgetService.setBudget(req, categoryId, limit);

    res.status(200).json({ message: 'Budget set successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/updateBudget', async (req: ReqWithUser, res: Response) => {
  try {
    const { categoryName, limit } = req.body;

    if (!categoryName || !limit) {
      return res.status(400).json({ error: 'Category name and limit are required' });
    }

    await setBudgetService.updateBudget(req, categoryName, limit);

    res.status(200).json({ message: 'Budget updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// delete budget route 

router.delete('/deleteBudget', async (req: ReqWithUser, res: Response) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    await setBudgetService.deleteBudget(req, categoryName);

    res.status(200).json({ message: 'Budget deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




export default router;